"""Compile the five editable examples. Requires Tectonic on PATH or --compiler."""
import argparse
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parent
NAMES = ('blackline', 'blueprint', 'compact', 'panel', 'extended')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--compiler', default='tectonic', help='Path to the Tectonic executable')
    args = parser.parse_args()
    output = ROOT / 'samples'
    output.mkdir(exist_ok=True)
    for name in NAMES:
        subprocess.run([args.compiler, '--outdir', str(output), str(ROOT/'latex'/f'{name}.tex')], check=True)

if __name__ == '__main__':
    main()
