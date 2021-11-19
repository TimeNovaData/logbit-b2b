from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from cms.menu_bases import CMSAttachMenu
from menus.base import NavigationNode
from menus.menu_pool import menu_pool

from noticias.models import Post


class PostMenu(CMSAttachMenu):
    name = _("Notícias Menu")  # give the menu a name this is required.

    def get_nodes(self, request):
        """
        This method is used to build the menu tree.
        """
        nodes = []
        for post in Post.objects.all():
            node = NavigationNode(
                title=post.titulo,
                url=reverse('noticias:detail', args=(post.pk,)),
                id=post.pk,  # unique id for this node within the menu
            )
            nodes.append(node)
        return nodes

menu_pool.register_menu(PostMenu)