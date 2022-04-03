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
                  buildHookId: '624a2c89294d1065e4da7b95',
                  title: 'Sanity Studio',
                  name: '11-tyysl-studio',
                  apiId: '1ae2c364-9004-4044-a7c2-b83d5779c325'
                },
                {
                  buildHookId: '624a2c8920abb601a4c117dd',
                  title: 'Blog Website',
                  name: '11-tyysl',
                  apiId: '2ec86df8-1c10-495b-9ad0-2ed4c78fe8af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/11tyysl',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://11-tyysl.netlify.app', category: 'apps'}
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
