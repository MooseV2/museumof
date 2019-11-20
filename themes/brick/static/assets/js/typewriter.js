const strings =
	['a handy-sized unit of building or paving material',
	'a good-hearted person',
	'a rectangular compressed mass (as of ice cream)',
	'a badly missed shot in basketball',
	'a semisoft cheese with numerous small holes, smooth texture, and often mild flavor',]
new TypeIt('#introdesc', {
  speed: 50,
  startDelay: 900,
  loop: true
})
.type('<em>/\'brik/, <strong>noun</strong></em>')
.pause(1000)
.type('<br>')
.pause(300)

.type(strings[0])
.pause(2500)
.delete(strings[0].length)
.pause(500)

.type(strings[1])
.pause(2500)
.delete(strings[1].length)
.pause(500)

.type(strings[2])
.pause(2500)
.delete(strings[2].length)
.pause(500)

.type(strings[3])
.pause(2500)
.delete(strings[3].length)
.pause(500)

.type(strings[4])
.pause(2500)
.delete(strings[4].length)
.pause(500)
.go();