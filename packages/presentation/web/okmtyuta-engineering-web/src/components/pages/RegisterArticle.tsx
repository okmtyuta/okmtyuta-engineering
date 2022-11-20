import { useEffect, useState } from 'react'
import { RegisterArticleDto } from '@okmtyuta-engineering/infrastructure/lib/command/monopoly/okmtyuta-engineering-api/article/dto/RegisterArtilce.dto'
import { Article } from '@okmtyuta-engineering/library/lib/entity/Article'
import { ApiResult, get, post } from '../../utilities/api/api'
import { ulid } from 'ulid'
import { DeleteResult } from 'typeorm'

import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'

const getAllArticle = async (): Promise<ApiResult<Article[]>> => {
  const response = await get('http://localhost:8000/article/list')
  return response.ok ? { ...response, data: response.data as Article[] } : response
}

const deleteAllArticle = async (): Promise<ApiResult<DeleteResult>> => {
  const response = await get('http://localhost:8000/article/deleteAll')
  return response.ok ? { ...response, data: response.data as DeleteResult } : response
}

const postArticle = async (params: RegisterArticleDto): Promise<ApiResult<Article>> => {
  const article = {
    title: params.title,
    content: params.content,
    description: params.description,
    references: params.references,
    isPublic: params.isPublic,
    thumbnail: params.thumbnail,
  }
  const response = await post('http://localhost:8000/article/register', article)
  return response.ok ? { ...response, data: response.data as Article } : response
}

export const RegisterArticle = () => {
  const [article, setArticle] = useState<RegisterArticleDto>({
    title: 'タイトル',
    content: '今日は快晴なり',
    description: '今日の天気を述べてみた',
    references: [],
    isPublic: true,
    thumbnail: null,
  })

  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    ;(async () => {
      const result = await getAllArticle()
      if (result.ok) {
        setArticles(result.data)
      }
    })()
  }, [])

  return (
    <div>
      <div>
        <Button
          variant="contained"
          onClick={async () => {
            const result = await getAllArticle()
            if (result.ok) {
              setArticles(result.data)
            }
            console.log(articles)
          }}
        >
          Get
        </Button>

        <Button
          variant="contained"
          onClick={async () => {
            const result = await postArticle(article)
            const getResult = await getAllArticle()
            if (getResult.ok) {
              setArticles(getResult.data)
            }
            console.log(result)
          }}
        >
          POST
        </Button>

        <Button
          variant="contained"
          onClick={async () => {
            const result = await deleteAllArticle()
            const getResult = await getAllArticle()
            if (getResult.ok) {
              setArticles(getResult.data)
            }
            console.log(result)
          }}
        >
          Delete
        </Button>
      </div>
      <TextField id="outlined-basic" label="title" variant="outlined" onChange={async (event) => {
        setArticle({
          ...article,
          title: event.target.value
        })
      }} />
      <TextField id="outlined-basic" label="content" variant="outlined" onChange={async (event) => {
        setArticle({
          ...article,
          content: event.target.value
        })
      }} />

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {articles.map((article) => {
          return (
            <ListItem key={ulid()}>
              <ListItemText primary={`${article.title}`} secondary={article.content} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
