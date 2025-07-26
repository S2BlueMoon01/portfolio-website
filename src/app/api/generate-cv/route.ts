import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { language } = await request.json()
    
    // Read the markdown file
    const markdownPath = path.join(process.cwd(), `cv-${language}.md`)
    
    if (!fs.existsSync(markdownPath)) {
      return NextResponse.json({ error: 'CV file not found' }, { status: 404 })
    }
    
    const markdownContent = fs.readFileSync(markdownPath, 'utf-8')
    
    // Simple HTML conversion (basic markdown to HTML)
    const htmlContent = markdownContent
      // Convert headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Convert bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert italic text
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert line breaks
      .replace(/\n/g, '<br>')
      // Convert links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // Convert bullet points
      .replace(/^- (.*$)/gim, '<li>$1</li>')
    
    // Wrap in HTML structure
    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            background: white;
            margin: 0;
            padding: 40px;
            max-width: 800px;
          }
          h1 {
            color: #009fff;
            font-size: 28px;
            margin-bottom: 20px;
          }
          h2 {
            color: #2c3e50;
            font-size: 20px;
            margin: 20px 0 10px 0;
          }
          h3 {
            color: #34495e;
            font-size: 16px;
            margin: 15px 0 8px 0;
          }
          p, li {
            margin-bottom: 8px;
          }
          ul {
            margin-left: 20px;
          }
          img {
            max-width: 166px;
            height: auto;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          blockquote {
            border-left: 4px solid #009fff;
            padding-left: 20px;
            margin: 20px 0;
            font-style: italic;
          }
          a {
            color: #009fff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `
    
    return NextResponse.json({ html: fullHtml })
    
  } catch (error) {
    console.error('Error generating CV:', error)
    return NextResponse.json({ error: 'Failed to generate CV' }, { status: 500 })
  }
}
