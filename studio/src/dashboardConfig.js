export default {
  widgets: [
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
                  buildHookId: '5e8895950ad2dc381eeea74c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ia2hi1nw',
                  apiId: '4a0c2343-1ffc-4521-942d-17f46a965c5d'
                },
                {
                  buildHookId: '5e889595e5fe81e9569cefbe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8qzgujbp',
                  apiId: '93c91177-ad99-4b13-85c3-694594d975d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AzharKhanplay/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8qzgujbp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
