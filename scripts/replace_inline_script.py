# -*- coding: utf-8 -*-
import os
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path = os.path.join(base, 'index.html')
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = '    <script>\n        // Translation data\n        const translations = {'
start = content.find(old)
if start == -1:
    raise SystemExit('Start pattern not found')
# End: after cvDownloads }; and script tags
end_marker = '    </script>\n    <script src="js/main.js" defer></script>'
end = content.find(end_marker, start)
if end == -1:
    raise SystemExit('End pattern not found')
end += len(end_marker)

replacement = '    <script type="module" src="js/main.js"></script>'
new_content = content[:start] + replacement + content[end:]
with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Replaced inline script in index.html')
