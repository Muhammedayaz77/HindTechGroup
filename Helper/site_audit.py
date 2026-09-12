from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
errors = []

class Parser(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.file = file
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in {"href", "src", "data-source"} or not value:
                continue
            target = value.split("#", 1)[0].split("?", 1)[0]
            if not target or target.startswith(("http://", "https://", "mailto:", "tel:", "javascript:", "data:")):
                continue
            candidate = (self.file.parent / target).resolve()
            try:
                candidate.relative_to(ROOT.resolve())
            except ValueError:
                errors.append(f"{self.file}: outside-root reference {value}")
                continue
            if not candidate.exists():
                errors.append(f"{self.file}: missing {value}")

for file in sorted((ROOT / "View").glob("*.html")):
    Parser(file).feed(file.read_text(encoding="utf-8"))

if errors:
    print("SITE AUDIT FAILED")
    print("\\n".join(errors))
    raise SystemExit(1)
print(f"SITE AUDIT PASSED: {len(list((ROOT / 'View').glob('*.html')))} HTML pages checked")
