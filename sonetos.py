import random

def estrofe1():
	return verso() + verso() + verso() + verso()
	return """
		Amo-te tanto, meu amor... nao canto
		O humano coracao com mais verdade...
		Amo-te como amigo e como amante
		Numa sempre diversa realidade
	"""

def estrofe2():
	return verso() + verso() + verso() + verso()
	return """
		Amo-te afim, de um calmo amor prestante,
		E te amo alem, presente na saudade.
		Amo-te, enfim, com grande liberdade
		Dentro da eternidade e a cada instante.
	"""

def estrofe3():
	return verso() + verso() + verso()
	return """
		Amo-te como um bicho, simplesmente,
		De um amor sem misterio e sem virtude
		Com um desejo macico e permanente.
	"""

def estrofe4():
	return verso() + verso() + verso()
	return """
		E de te amar assim muito amiude,
		que um dia em teu corpo de repente
		Hei de morrer de amar mais do que pude.
	"""

def verboInfinitivo():
	lista = ["amar", "beijar", "ver", "viver", "contar", "dancar", "voar"]
	return random.choice(lista)

def verboConjugado():
	lista = ["quero", "vou", "preciso", "desejo", "espero", "nasci para"]
	return random.choice(lista)

def substantivo():
	lista = ["pudim", "calca de brim", "aipim", "ceu", "no beleleu", "pastel", "irmao do jorel"]
	return random.choice(lista)

def verso():
	return verboConjugado() + " " + verboInfinitivo() + " " + substantivo() + "\n"

print estrofe1(), "\n", estrofe2(), "\n", estrofe3(), "\n", estrofe4()