import { writeFile, readFile } from 'fs'

export interface Post {
  id: number
  title: string
  body: string
  postedBy: string
}

export interface IPostService {
  getAll(): Promise<Post[]>
  save(post: Post): Promise<void>
}

export class MockPostService implements IPostService {
  private _posts: Post[]

  constructor () {
    this._posts = [
      {
        id: 4,
        title: 'good',
        body: 'nice',
        postedBy: 'james'
      },
      {
        id: 6,
        title: 'good',
        body: 'nice',
        postedBy: 'james'
      }
    ]
  }

  getAll (): Promise<Post[]> {
    return Promise.resolve(this._posts)
  }
  save (post: Post): Promise<void> {
    return new Promise(() => {
      this._posts.push(post)
    })
  }
}
// Low level method depends on an abstraction
export class PostService implements IPostService {
  private _filename: string = 'post.json'
  constructor () {}
  getAll (): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      readFile(this._filename, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        }
        return resolve(JSON.parse(data))
      })
    })
  }
  save (post: Post): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getAll().then(posts => {
        posts.push(post)
        writeFile(this._filename, posts, err => {
          if (err) {
            return reject(new Error(`error writing to ${this._filename}`))
          }
          return resolve()
        })
      })
    })
  }
}

// High Level module depends on an abstraction and not a concrete low  level module

export class ClassFeed {
  constructor (private _service: IPostService) {}
  show (): void {
    this._service.getAll().then(posts => {
      posts.forEach(post => {
        console.log(`${post.title}, ${post.body}`)
      })
    })
  }
}

const newFeed = new ClassFeed(new PostService())
newFeed.show()

const newFeedMock = new ClassFeed(new MockPostService())
newFeedMock.show()
