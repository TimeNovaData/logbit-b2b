from django.db import models
from cms.models import CMSPlugin
from .post import Post


class PostPlugin(CMSPlugin):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.post.titulo