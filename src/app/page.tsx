'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Check } from 'lucide-react'

export default function Home() {
  const [campaignTitle, setCampaignTitle] = useState('')
  const [campaignDate, setCampaignDate] = useState('')
  const [ctaText, setCtaText] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('https://globalinvestsinc.com/thank-you/')
  const [generatedLink, setGeneratedLink] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Set default date to today
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    setCampaignDate(formattedDate)
  }, [])

  const generateLink = () => {
    const baseUrl = 'https://n8n.srv1090323.hstgr.cloud/webhook/76f703ce-dce8-4cf2-9e63-17de9770a826'
    
    // Encode the redirect URL
    const encodedRedirectUrl = encodeURIComponent(redirectUrl)
    
    // Format date as YYYY-AA-GG (using the provided format)
    const [year, month, day] = campaignDate.split('-')
    const formattedDate = `${year}-${month}-${day}`
    
    const link = `${baseUrl}?email={{subscriber.email}}&campaign_title=${encodeURIComponent(campaignTitle)}&campaign_date=${formattedDate}&cta=${encodeURIComponent(ctaText)}&redirect_url=${encodedRedirectUrl}`
    
    setGeneratedLink(link)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = generatedLink
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Global Investments Flodesk Link Generator
          </h1>
          <p className="text-gray-600">
            Generate custom Flodesk links with campaign parameters
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Link Parameters</CardTitle>
            <CardDescription>
              Fill in the campaign details to generate your custom link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="campaign-title">Campaign Title</Label>
              <Input
                id="campaign-title"
                placeholder="Enter campaign title"
                value={campaignTitle}
                onChange={(e) => setCampaignTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="campaign-date">Campaign Date</Label>
              <Input
                id="campaign-date"
                type="date"
                value={campaignDate}
                onChange={(e) => setCampaignDate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-text">CTA Text</Label>
              <Input
                id="cta-text"
                placeholder="Enter call-to-action text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="redirect-url">Redirect URL</Label>
              <Input
                id="redirect-url"
                placeholder="Enter redirect URL"
                value={redirectUrl}
                onChange={(e) => setRedirectUrl(e.target.value)}
              />
            </div>

            <Button 
              onClick={generateLink} 
              className="w-full"
              disabled={!campaignTitle || !ctaText}
            >
              Generate Link
            </Button>
          </CardContent>
        </Card>

        {generatedLink && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Generated Link</CardTitle>
              <CardDescription>
                Your custom Flodesk link is ready to use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 rounded-md break-all">
                  <code className="text-sm text-gray-800">{generatedLink}</code>
                </div>
                <Button 
                  onClick={copyToClipboard} 
                  variant="outline" 
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}