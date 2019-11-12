// link-transcript.js -- provide links to transcripts
// usage
// node link-transcript.js <files>
// node link-transcript.js pages/transcripts/*.md

const stopwords = [
  'i',
  'me',
  'my',
  'myself',
  'we',
  'our',
  'ours',
  'ourselves',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  'he',
  'him',
  'his',
  'himself',
  'she',
  'her',
  'hers',
  'herself',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'themselves',
  'what',
  'which',
  'who',
  'whom',
  'this',
  'that',
  'these',
  'those',
  'am',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'a',
  'an',
  'the',
  'and',
  'but',
  'if',
  'or',
  'because',
  'as',
  'until',
  'while',
  'of',
  'at',
  'by',
  'for',
  'with',
  'about',
  'against',
  'between',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'to',
  'from',
  'up',
  'down',
  'in',
  'out',
  'on',
  'off',
  'over',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'can',
  'will',
  'just',
  'don',
  'should',
  'now',
];

const fs = require('fs');

const files = process.argv.slice(2);

files.forEach((f) => {
  const content = fs.readFileSync(f).toString();

  const lines = content.split('\n').map((line) => {
    if (line.startsWith('**Q:**')) {
      let slug = line
        .split(' ')
        .slice(1)
        .map((c) => {
          c = c.toLowerCase();
          c = c.replace(/\W/g, '');
          return c;
        })
        .filter((c) => c.length > 0 && !stopwords.includes(c))
        .slice(0, 5)
        .join('-');

      return `<a name="${slug}" href="#${slug}">#</a> ${line}\n`;
    }

    return line;
  });

  fs.writeFileSync(f, lines.join('\n'));

  //console.log(lines.join('\n'));
});
