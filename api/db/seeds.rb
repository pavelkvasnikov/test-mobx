# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.create!([
                  { name: 'New'     } ,
                  { name: 'Featured'} ,
                  { name: 'Hot'     }
              ]
)

Article.create!([
                    {  name: 'test1', description: 'descr1', article_type: 'tweet', story_id: 1 },
                    {  name: 'test2', description: 'descr2', article_type: 'tweet', story_id: 1 },
                    {  name: 'test3', description: 'descr3', article_type: 'facebook', story_id: 2 },
                    {  name: 'test4', description: 'descr4', article_type: 'insta', story_id: 3 },
                ]
)

