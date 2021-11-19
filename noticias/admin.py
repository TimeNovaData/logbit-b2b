'''
Favor colocar as importações em ordem alfabética para uma melhor organização
'''

from .models import (
    Categoria,
    Post
)
from django.contrib import admin


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'nome',
        'data_criacao',
        'data_edicao',
    ]

    list_filter = [
        'nome',
        'data_criacao',
        'data_edicao',
    ]

    search_fields = [
        'nome',
    ]


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'titulo',
        'data_criacao',
        'data_edicao',
    ]

    list_filter = [
        'titulo',
        'data_criacao',
        'data_edicao',
    ]

    search_fields = [
        'titulo',
    ]

    filter_horizontal = [
        'categorias',
    ]