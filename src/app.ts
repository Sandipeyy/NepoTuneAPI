import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { Home } from './pages/home'
import type { Routes } from '#common/types'
import type { HTTPException } from 'hono/http-exception'

export class App {
  private app: OpenAPIHono

  constructor(routes: Routes[]) {
    this.app = new OpenAPIHono()

    this.initializeGlobalMiddlewares()
    this.initializeRoutes(routes)
    this.initializeSwaggerUI()
    this.initializeRouteFallback()
    this.initializeErrorHandler()
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      route.initRoutes()
      this.app.route('/api', route.controller)
    })

    this.app.route('/', Home)
  }

  private initializeGlobalMiddlewares() {
    this.app.use(logger())
    this.app.use(prettyJSON())
    this.app.use(cors())
  }

  private initializeSwaggerUI() {
    this.app.doc31('/swagger', (c) => {
      const { protocol: urlProtocol, hostname, port } = new URL(c.req.url)
      const protocol = c.req.header('x-forwarded-proto')
        ? `${c.req.header('x-forwarded-proto')}:`
        : urlProtocol

      return {
        openapi: '3.1.0',
        info: {
          version: '1.0.0',
          title: 'NepoTune API',
          description: `# Introduction
          
          NepoTune API is an unofficial JioSaavn API that provides fast, reliable access to songs, albums, artists, and playlists. 
          Designed for developers, it enables high-quality music data fetching and downloading through a simple and consistent interface.`,
          contact: {
            name: 'Sandip Gurung',
            url: 'https://github.com/Sandipeyy/NepoTuneAPI'
          },
          license: {
            name: 'MIT',
            url: 'https://github.com/Sandipeyy/NepoTuneAPI/blob/main/LICENSE'
          }
        },
        servers: [
          {
            url: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
            description: 'Current environment'
          }
        ]
      }
    })

    this.app.get(
      '/docs',
      apiReference({
        pageTitle: 'NepoTuneAPI Documentation',
        theme: 'deepSpace',
        isEditable: false,
        layout: 'modern',
        darkMode: true,
        metaData: {
          applicationName: 'NepoTuneAPI',
          author: 'Sandip Gurung',
          creator: 'Sandip Gurung',
          publisher: 'Sandip Gurung',
          robots: 'index, follow',
          description:
            'NepoTuneAPI is an unofficial wrapper written in TypeScript for JioSaavn, providing programmatic access to songs, albums, artists, playlists, and more.'
        },
        url: '/swagger'
      })
    )
  }

  private initializeRouteFallback() {
    this.app.notFound((ctx) => {
      return ctx.json(
        {
          success: false,
          message: 'Route not found, check docs at /docs'
        },
        404
      )
    })
  }

  private initializeErrorHandler() {
    this.app.onError((err, ctx) => {
      const error = err as HTTPException
      return ctx.json(
        { success: false, message: error.message },
        error.status || 500
      )
    })
  }

  public getApp() {
    return this.app
  }
}
