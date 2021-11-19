from cms.toolbar_base import CMSToolbar
from cms.toolbar_pool import toolbar_pool
from cms.utils.urlutils import admin_reverse
from noticias.models import Post


class PostToolbar(CMSToolbar):

    def populate(self):
        menu = self.toolbar.get_or_create_menu(
            'noticias_cms_integration-noticias',  # a unique key for this menu
            'Noticias',                        # the text that should appear in the menu
        )
        
        menu.add_sideframe_item(
            name='Posts list',                              # name of the new menu item
            url=admin_reverse('noticias_post_changelist'),     # the URL it should open with
        )
        
        menu.add_modal_item(
            name='Add Post',                # name of the new menu item
            url=admin_reverse('noticias_post_add'),  # the URL it should open with
        )


# register the toolbar
toolbar_pool.register(PostToolbar)