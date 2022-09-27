export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'andries-ui/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '6333691ebeaf56005fa5ec0d',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-jrj52uyc',
                  apiId: '5bfb01de-607e-43e1-8220-7fe6b43b1d40'
                },
                {
                  buildHookId: '6333691e2a4cd70049e8d698',
                  title: 'Website',
                  name: 'sanity-angular-website-web-74a1p65g',
                  apiId: 'fd15480e-16bc-49a6-9c85-b4484d535d65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andries-ui/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-74a1p65g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
