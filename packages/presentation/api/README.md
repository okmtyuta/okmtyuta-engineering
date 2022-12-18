# API Documentation

## Interface

### Article

```js
params = {
  title: string,
  content: string,
  description: string,
  references: string[] | null,
  isPublic: boolean,
  thumbnail: string | null,
  tags: Tag[],
  user: User | null,
}
```
