export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626adb0f1b6e1a007f3487f7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fwsyxsx7',
                  apiId: '22c06478-37ed-4f3b-a5d0-f62643dfd049'
                },
                {
                  buildHookId: '626adb0f9164d802bccc87b0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-v2sddh9f',
                  apiId: 'b6423683-716c-402c-b29e-a59986049570'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cunningryan/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-v2sddh9f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
