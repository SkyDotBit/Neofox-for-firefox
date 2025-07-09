import os
import json
neofoxes = []
currentdir = os.path.dirname(os.path.abspath(__file__))
neofoxdir = os.path.join(currentdir, 'neofox')
for file in os.listdir(neofoxdir):
    if file.endswith(".png"):
        name = file.split('.')[0]
        neofoxes.append(name)
with open('neofoxes.json', 'w') as f:
    json.dump(neofoxes, f)
