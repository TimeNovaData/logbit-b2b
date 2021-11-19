'''
Favor colocar os nomes em ordem alfabética para uma melhor organização
'''
from django.db import models

class Categoria(models.Model):
    '''
    Classe que guarda e registra novas categorias de posts no sistema
    '''

    nome = models.CharField(
        verbose_name='Nome',
        max_length=70
    )

    data_criacao = models.DateTimeField(
        verbose_name='Data de criação',
        auto_now_add=True
    )

    data_edicao = models.DateTimeField(
        verbose_name='Data de edição',
        auto_now=True
    )

    def __str__(self):
        return self.nome
    
    class Meta:
        app_label='noticias'
        verbose_name='Categoria'
        verbose_name_plural='Categorias'