export type TemplateInput = {
    id: string;
    label: string;
    placeholder: string;
    type: "text" | "textarea" | "select";
    options?: string[];
};

export type Template = {
    id: string;
    title: string;
    description: string;
    command: string;
    inputs: TemplateInput[];
    icon: any;
    categories: string[];
};

export const TEMPLATES: Template[] = [
    {
        "id": "a6dc-0f21-c102-6c22",
        "title": "Amazon Product Description (paragraph)",
        "description": "Create compelling product descriptions for Amazon listings.",
        "command": "Create compelling product descriptions for Amazon listings.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        inputs: [
            {
                id: "product-name",
                label: "Product Name",
                placeholder: "A red t-shirt",
                type: "text",
            },
            {
                id: "key-features",
                label: "Key Features/Benefits",
                placeholder: "Stretching, pleasant",
                type: "textarea",
            },
            {
                id: "tone-of-voice",
                label: "Tone of Voice",
                placeholder: "Select a tone. For example: Witty, Friendly, Disappointed, Polite, Creative, Professional or a known person such as Michael Jordan",
                type: "text",
            },
        ]
    },
    {
        "id": "3b9e-c357-63fb-f7cb",
        "title": "Amazon Product Features (bullets)",
        "description": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "command": "Create key feature and benefit bullet points for Amazon listings under the 'about this item' section.",
        "icon": `<i class="fab fa-aws text-primary"></i>`,
        "categories": ["ecommerce", "ads"],
        "inputs": [
            {
                "id": "product-name",
                "label": "Product Name",
                "placeholder": "EcoBoost Portable Solar Charger",
                "type": "text"
            },
            {
                "id": "product-info",
                "label": "Product Info",
                "placeholder": "EcoBoost Portable Solar Charger - Compact, Lightweight, and Waterproof - Perfect for Camping, Hiking, and Emergency Preparedness - Compatible with Smartphones, Tablets, and USB Devices",
                "type": "textarea"
            },
            {
                "id": "product-benefits",
                "label": "Key Benefits/Features",
                "placeholder": "Lightweight design. Waterproof & Durable. Fast charging. Universal compatibility. Environmentally friendly.",
                "type": "text"
            },
            {
                "id": "tone-of-voice",
                "label": "Tone of Voice",
                "placeholder": "Professional. Friendly. Funny.",
                "type": "text"
            }
        ]
    },

    {
        "id": "5df5-5b3a-d3a7-1610",
        "title": "Blog Post Conclusion Paragraph",
        "description": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "command": "Wrap up your blog posts with an engaging conclusion paragraph.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostMainPoints",
                "label": "What are the main points or outline of your blog post?",
                "placeholder": "The importance of time management. Tips for better time management. Benefits of effective time management.",
                "type": "textarea"
            },
            {
                "id": "cta",
                "label": "Call to action",
                "placeholder": "Share your time management tips with us in the comments below!",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Motivational",
                "type": "text"
            }
        ]
    },
    {
        "id": "8d27-85d1-d2bb-f6d8",
        "title": "Blog Post Intro Paragraph",
        "description": "Write an engaging opening paragraph for your blog post.",
        "command": "Write an engaging opening paragraph for your blog post.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "blogPostTitle",
                "label": "Blog post title",
                "placeholder": "Creative Ways to Save Money on a Tight Budget",
                "type": "text"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Young professionals, Students, Budget-conscious individuals",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "eb38-d6a3-3b3c-d790",
        "title": "Blog Post Outline",
        "description": "Create lists and outlines for articles, for example for 'How to' style blog posts and articles.",
        "command": " It should all encompass a gripping introduction informative main content and a conclusive calltoaction that reinforces your blog's primary objective
3 SEODriven Approach
    Formulate a robust SEO strategy integrating primary and related keywords that cater to your topic's search potential Craft an enticing meta description strategize for backlink acquisition and plan engaging SEOconscious headers and subheaders to organize your content effectively
4 Content Drafting with a Human Touch
    Commence with your content creation Design an engaging opener that speaks directly to your audience's challenges or curiosities followed by detailed sections as outlined that offer profound insights practical guidance and innovative solutions Incorporate narrative elements to keep your reader invested ensuring your content exudes authenticity expertise and empathy
5 Enhancement Through AI
    Employ AIdriven tools to spark additional creative content ideas find alternatives for repetitive terminology and conceptualize engaging visual or multimedia elements Preserve a balance by maintaining your unique style and voice ensuring the technology complements rather than overshadows your human insight
6 Interactive Audience Engagement
    Prepare for direct audience communication postpublication Create engaging social media content draft responses to potential comments and design interactive email newsletters Explore incorporating interactive content like polls quizzes or live Q&A sessions to sustain and heighten reader interest
7 Meticulous Review and Refinement
    Conduct a thorough review of your content focusing on SEO elements readability and user engagement levels Utilize AI assistance for grammar corrections and stylistic enhancements Confirm that the content aligns with your initial outline and adheres to the highest quality benchmarks
8 Final Touches and Multimedia Integration
    Enrich your post with multimedia elements selecting relevant optimized images videos or infographics that supplement your written content Verify these elements for optimal loading efficiency and SEO compatibility
9 Strategic Publication and Promotion
    Proceed to publish your blog post Implement your promotional strategies across various platforms including social media blasts email campaigns and strategic outreach for guest posting or backlink opportunities Keep a close eye on performance indicators and audience interaction
10 PostPublication Analysis and Adaptation
     Postrelease continuously monitor your content's performance through various metrics audience feedback and overall engagement Use these insights for iterative improvements followup content or to guide future topic exploration
Important Reminder
 Remember while AI offers powerful assistance it doesn't replace the unique insights personal expertise and authentic connection you bring to your content Utilize AI as an enhancing tool but rely on your intuition and expertise to truly resonate with your audience Stay authentic offer undeniable value and remain agile in the dynamic world of digital content creation
This instructional guide is designed to be a comprehensive roadmap assisting you from the initial contemplation stages of your blog post creation through to the postpublication analysis and engagement ensuring each step is detailed actionable and designed to create a standout presence in the digital space
PLUGINMSTR1PluginIdentification 1aPluginId 1bPluginOp2a2b 2UnderstandingModel 2aModelUndrstnd 2bCntxtAdpt3a3b 3Integration 3aSequIntegr 3bParllIntegr4a4b 4PerformanceMonitoring 4aPerfMon 4bItrtvImprv5a5b 5ResultInterpretation 5aRsltIntrprt 5bUsrInstrct
TYPICAL WORKFLOW
CntGnWkflw1CntxtAnlyss 1aIdPurps2a3a 1bDfTpics2b3b 1cCrtvDrctn2c3c 2TskFrmt 2aSctnGdlns3a4a 2bTpcDpth3b5a 2cDsrdLng3c4b5b 3AplTech 3aImplmnt 〔AvdAIDtct〕 7a7b 3bUtilzUnqVc4a6a 3cMntn12yoComprhn5b6b 4ShrtPnchyStl 4aPnchnssEncrg5a6a 4bWrtngTchnqs5b6b 5EdtEnhnc 5aFcsOrgnlty8a 5bSmplfyLng8b 6HmnCrtvty 6aIncrprtLfExprnc8a 6bRlyEmtns8b 7FrmtOtpt 7aAsmbSctns8a 7bVrfyGdlnsMt8b 8FnlRvw 8aCntntEvalRslt 8bFdbkLpItrtn
TASKBriefly introduce yourself and ask how you can helpTask
: ",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo"],
        "inputs": [
            {
                "id": "title",
                "label": "Blog post title/topic",
                "placeholder": "Top 10 Remote Work Tools for Increased Productivity",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Relaxed, Helpful",
                "type": "text"
            }
        ]
    },

    {
        "id": "f4b4-4dc9-38e4-4714",
        "title": "Blog Post Topic Ideas",
        "description": "Generate new blog post topics that will engage readers and rank well on Google.",
        "command": "Generate new blog post topics that will engage readers and rank well on Google.",
        "icon": `<i class="fas fa-fire text-primary"></i>`,
        "categories": ["blog", "seo", "google"],
        "inputs": [
            {
                "id": "brandName",
                "label": "Brand name",
                "placeholder": "Eco Warrior",
                "type": "text"
            },
            {
                "id": "productDescription",
                "label": "Product description",
                "placeholder": "Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions.",
                "type": "textarea"
            },
            {
                "id": "audience",
                "label": "Audience",
                "placeholder": "Eco-conscious consumers, Sustainability advocates, Homeowners",
                "type": "text"
            },
            {
                "id": "tone",
                "label": "Tone of voice",
                "placeholder": "Informative, Friendly, Encouraging",
                "type": "text"
            }
        ]
    },
    {
        "id": "a0c6-7112-e2d8-07e9",
        "title": "Business or Product Name",
        "description": "Generate a winning name for your business or product.",
        "command": "Generate a winning name for your business or product.",
        "icon": "<i class='fas fa-lightbulb text-primary' ></i>",
        "categories": ["marketing"],
        "inputs": [
            {
                "id": "form-field-description",
                "type": "textarea",
                "label": "Tell us about your business or product",
                "placeholder": "Innovative online marketplace connecting local service providers and customers.",
            },
            {
                "id": "form-field-keywords",
                "type": "text",
                "label": "Keywords to include",
                "placeholder": "ninja",
            }
        ]
    },
    {
        "id": "ab91-6218-4ed4-4374",
        "title": "Commands",
        "description": "Tell Jema.ai exactly what to write with a command.",
        "command": "Please do the following: ",
        "icon": "<i class='fas fa-terminal  text-primary'></i>",
        "categories": ["all", "google"],
        "inputs": [
            {
                "id": "form-field-command",
                "type": "textarea",
                "label": "Your command",
                "placeholder": "Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice",
            },
            {
                "id": "form-field-content",
                "type": "textarea",
                "label": "Background information",
                "placeholder": "Tobby was a happy dog that loved to sneak around eating people's food",
            }
        ]
    },
    {
        "id": "2f67-d52f-fc58-383d",
        "title": "Creative Story",
        "description": "Write creative stories to engage readers.",
        "command": "Write a creative story ",
        "icon": "<i class='fas fa-book-open text-primary'></i>",
        "categories": ["blog", "website"],
        "inputs": [
            {
                "id": "storyPlot",
                "type": "textarea",
                "label": "Plot",
                "placeholder": "A magical kingdom faces a drought that threatens its existence. The king sends a brave knight on a quest to find a legendary water source.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Whimsical",
            }
        ]
    },
    {
        "id": "1a79-8d7e-cc88-1e61",
        "title": "Email Subject Lines",
        "description": "Get your emails opened with irresistible subject lines.",
        "command": "Write Email Subject Lines. use the following : ",
        "icon": "<i class='fas fa-envelope text-primary'></i>",
        "categories": ["email", "marketing"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company/Product Name",
                "placeholder": "SmartMailer",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Friendly",
            },
            {
                "id": "emailContent",
                "type": "textarea",
                "label": "What is your email about?",
                "placeholder": "Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount.",
            }
        ]
    },
    {
        "id": "72e8-66f6-1009-9e54",
        "title": "Company Bio",
        "description": "Share your company's story with a compelling bio.",
        "command": "Create a compelling bio for the following company. ",
        "icon": "<i class='fas fa-building text-primary'></i>",
        "categories": ["marketing", "website"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company Name",
                "placeholder": "InnovateTech",
            },
            {
                "id": "companyInformation",
                "type": "textarea",
                "label": "Company information",
                "placeholder": "InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses. Founded in 2018 and based in New York City, we focus on helping companies streamline their processes and improve customer engagement.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Professional",
            }
        ]
    },
    {
        "id": "e7b3-458e-62df-17c8",
        "title": "Content Improver",
        "description": "Enhance a piece of content by rewriting it to be more engaging, creative, and captivating.",
        "command": "Rewrite the following content to be more engaging, creative, and captivating: ",
        "icon": "<i class='fas fa-pencil-alt text-primary'></i>",
        "categories": ["blog", "seo", "email"],
        "inputs": [
            {
                "id": "blandContent",
                "type": "textarea",
                "label": "Content",
                "placeholder": "We help agencies automate their daily tasks so they can scale better and faster with less effort.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Funny",
            }
        ]
    },
    {
        "id": "23e7-687f-0df7-1e47",
        "title": "Facebook Ad Primary Text",
        "description": "Craft compelling primary text for Facebook ads that attract users.",
        "command": "Create compelling primary text for Facebook ad.",
        "icon": "<i class='fab fa-facebook text-primary'></i>",
        "categories": ["ads", "social_media"],
        "inputs": [
            {
                "id": "companyName",
                "type": "text",
                "label": "Company/Product Name",
                "placeholder": "Pushpress",
            },
            {
                "id": "productDescription",
                "type": "textarea",
                "label": "Product description",
                "placeholder": "Gym software that helps gym owners manage their gym with less stress and make more money.",
            },
            {
                "id": "tone",
                "type": "text",
                "label": "Tone of voice",
                "placeholder": "Excited",
            }
        ]
    },
    {
        "id": "87a3-56d9-3182-2a01",
        "title": "Job Description",
        "description": "Create a clear and concise job description to attract suitable candidates.",
        "command": "Write a compelling and a clear and concise job description for the following company:",
        "icon": "<i class='fas fab fa-linkedin text-primary'></i>",
        "categories": ["linkedin", "social_media"],
        "inputs": [
            {
                "id": "jobTitle",
                "type": "text",
                "label": "Job Title",
                "placeholder": "Software Engineer",
            },
            {
                "id": "companyName",
                "type": "text",
                "label": "Company Name",
                "placeholder": "InnovateTech",
            },
            {
                "id": "companyDescription",
                "type": "textarea",
                "label": "Company Description",
                "placeholder": "InnovateTech is a cutting-edge technology firm that specializes in developing software solutions for businesses.",
            },
            {
                "id": "jobOverview",
                "type": "textarea",
                "label": "Job Overview",
                "placeholder": "We are looking for a skilled Software Engineer to join our team and help us develop high-quality software solutions.",
            },
            {
                "id": "responsibilities",
                "type": "textarea",
                "label": "Responsibilities",
                "placeholder": "Design, develop, and maintain software solutions. Collaborate with cross-functional teams to deliver high-quality products.",
            },
            {
                "id": "requirements",
                "type": "textarea",
                "label": "Requirements",
                "placeholder": "Bachelor's degree in Computer Science or related field. Proficient in JavaScript, Python, or Java.",
            },
            {
                "id": "benefits",
                "type": "textarea",
                "label": "Benefits",
                "placeholder": "Competitive salary, flexible working hours, and a comprehensive benefits package.",
            },
            {
                "id": "location",
                "type": "text",
                "label": "Location",
                "placeholder": "New York City, NY",
            },
            {
                "id": "employmentType",
                "type": "text",
                "label": "Employment Type",
                "placeholder": "Full-time",
            }
        ]
    },
    {
        "id": "a1b2-34c5-678d-90ef",
        "title": "LinkedIn Topic Ideas",
        "description": "Get inspired with LinkedIn topic ideas to share with your network.",
        "command": "Suggest LinkedIn topic ideas to share with my network.",
        "icon": "<i class='fas fab fa-linkedin text-primary'></i>",
        "categories": ["linkedin", "social_media"],
        "inputs": [
            {
                "id": "topic",
                "type": "text",
                "label": "Topic",
                "placeholder": "Marketing",
            },            {
                "id": "audience",
                "type": "text",
                "label": "Audience",
                "placeholder": "Marketers, companies, business owners",
            },
        ]
    }
]
