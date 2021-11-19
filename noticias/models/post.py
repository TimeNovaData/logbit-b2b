'''
Favor colocar os nomes em ordem alfabética para uma melhor organização
'''

from django.db.models.fields import TextField
from .categoria import Categoria
from django.contrib.auth.models import User
from django.db import models

class Post(models.Model):
	'''
	Classe para realizar as funções relacionadas aos posts do sistema
	'''

	titulo = models.CharField(
		verbose_name='Título',
		max_length=70
	)

	foto = models.ImageField(
		verbose_name="Foto Home",
		upload_to="posts/",
		help_text="Tamanho sugerido (400px x 400px)",
		blank=True, null=True
	)

	foto_capa = models.ImageField(
		verbose_name="Foto Comunicado",
		upload_to="posts/",
		help_text="Tamanho sugerido (1200px x 300px)",
		blank=True, null=True
	)

	anexo = models.FileField(
		verbose_name="Anexo",
		upload_to="posts/",
		blank=True, null=True
	)

	resumo = models.TextField(
		verbose_name='Resumo',
		blank=False, null=True
	)

	conteudo = models.TextField(
		verbose_name='Conteúdo'
	)

	categorias = models.ManyToManyField(
		Categoria,
		verbose_name='Categorias',
		blank=True
	)

	data_criacao = models.DateTimeField(
		verbose_name='Data de criação',
		auto_now_add=True
	)

	data_edicao = models.DateTimeField(
		verbose_name='Data de edição',
		auto_now=True
	)

	def get_absolute_url(self):
		return "/posts/{}/".format(self.id)

	def __str__(self):
		return self.titulo
	
	class Meta:
		app_label='noticias'
		verbose_name='Post'
		verbose_name_plural='Posts'
		ordering = ['-id']