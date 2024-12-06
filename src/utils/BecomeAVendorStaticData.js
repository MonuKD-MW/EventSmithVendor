export const features = [
    {
      "title": "Create Your Own Brand Image and Stand Out",
      "description": "Highlight your unique brand and services with customizable profile options.",
      "icon": "brand_icon"
    },
    {
      "title": "Our Marketing, Your Exposure",
      "description": "Powerful marketing campaigns that put you front and center! We drive traffic to your profile so you can focus on providing an exceptional service.",
      "icon": "marketing_icon"
    },
    {
      "title": "See who's looking at your profile with transparent user analytics",
      "description": "Understand your client traffic and activity so you can make data-driven decisions — no more guessing about what's working!",
      "icon": "analytics_icon"
    },
    {
      "title": "Easy, Efficient, and Ready to Use",
      "description": "Manage bookings, inquiries, and profile updates on a user-friendly platform that keeps you focused on your clients.",
      "icon": "efficiency_icon"
    },
    {
      "title": "Gain the Edge Your Competitors Are Missing",
      "description": "Gain early access to insights, visibility features, and marketing tools designed to give you a head start — stand out from day one as others play catch-up.",
      "icon": "competitive_edge_icon"
    },
    {
      "title": "Affordable Options That Work with Your Budget",
      "description": "Choose from flexible pricing packages with options to boost visibility and engagement without breaking the bank.",
      "icon": "budget_icon"
    },
    {
      "title": "Transform website views into real sales and revenue",
      "description": "Secure more bookings and unlock new revenue opportunities!",
      "icon": "revenue_icon"
    },
    {
      "title": "Premium Spotlight Placement to Boost Visibility",
      "description": "Get noticed first by clients with premium visibility at the top of search results.",
      "icon": "spotlight_icon"
    },
    {
      "title": "Create Personalized Packages That Perfectly Match Your Clients' Vision",
      "description": "Design flexible, bespoke options that meet the unique needs of every client",
      "icon": "personalization_icon"
    }
  ];
  console.log(JSON.stringify(features, null, 2));
export  const faqs = [
    {
      question: "What is your cancellation policy?",
      subQuestions: [
        {
          question: "Can I cancel anytime?",
          answer: "Yes, you can cancel your subscription at any time.",
        },
        {
          question: "When will the cancellation take effect?",
          answer:
            "The cancellation will take effect at the end of your current billing period.",
        },
      ],
    },
    {
      question: "How do I change my plan?",
      subQuestions: [
        {
          question: "Can I change my plan anytime?",
          answer:
            "Yes, you can change your plan at any time through your account settings.",
        },
        {
          question: "When does the plan change take effect?",
          answer:
            "The change will take effect at the start of your next billing period.",
        },
      ],
    },
    {
      question: "Can I get a refund?",
      subQuestions: [
        {
          question: "What is the refund policy?",
          answer: "We offer a 30-day money-back guarantee for all our plans.",
        },
        {
          question: "How can I request a refund?",
          answer:
            "If you're not satisfied with our service, you can request a refund within 30 days of your purchase.",
        },
      ],
    },
    {
      question: "How do I contact support?",
      subQuestions: [
        {
          question: "Is support available 24/7?",
          answer: "Yes, you can reach our support team 24/7.",
        },
        {
          question: "How can I contact support?",
          answer:
            "You can contact support through the help center in your account or by emailing support@example.com.",
        },
      ],
    },
    {
      question: "Do you offer discounts?",
      subQuestions: [
        {
          question: "Do you have annual discounts?",
          answer: "Yes, we offer discounts for annual subscriptions.",
        },
        {
          question: "Are there special promotions?",
          answer:
            "Yes, we run special promotions throughout the year. Sign up for our newsletter to stay updated.",
        },
      ],
    },
  ];
 export  const pricingData = {
    packages: [
      {
        name: "Personal Branding",
        type: "Starter Package",
        description:
          "Ideal for vendors looking to establish their presence online without the complexity.",
        monthlyPrice: 60,
        sixMonthPrice: "45 (25% off)",
        features: {
          websiteProfile: true,
          seo: true,
          eventBookings: "Up to 5 per month.",
          imageUploads: "Up to 30 images",
          videoUploads: "-",
          primaryEventType: true,
          serviceCategory: true,
          commitment: "No commitment, cancel any time",
          metricsAndDashboard: false,
          exclusiveFeatures: false,
          prioritySupport: false,
        },
        recommended: false, // Not recommended
      },
      {
        name: "Insightful Growth",
        type: "Growth Package",
        description:
          "Ideal for vendors looking to get access to powerful analytics and metrics that help them elevate their brand and tell their unique story",
        monthlyPrice: 150,
        sixMonthPrice: "100 (33% off)",
        features: {
          websiteProfile: true,
          seo: true,
          eventBookings: true,
          imageUploads: "Up to 200 images.",
          videoUploads: "Up to 5 videos",
          primaryEventType: true,
          serviceCategory: true,
          commitment: "Sign up for at least 6 months to enjoy the full benefits",
          metricsAndDashboard: true,
          exclusiveFeatures: false,
          prioritySupport: false,
        },
        recommended: true, // Recommended package
      },
      {
        name: "AI-Powered Branding",
        type: "Premium Package",
        description:
          "Ideal for vendors who want to unlock the full potential of their brand with AI-powered insights and premium features",
        monthlyPrice: 275,
        sixMonthPrice: "175 (36% off)",
        features: {
          websiteProfile: true,
          seo: true,
          eventBookings: true,
          imageUploads: "Up to 750 images.",
          videoUploads: "Up to 10 videos",
          primaryEventType: true,
          serviceCategory: true,
          commitment: "Sign up for at least 6 months to enjoy the full benefits",
          metricsAndDashboard: true,
          exclusiveFeatures: true,
          prioritySupport: true,
        },
        recommended: false,
      },
    ],
  };
 export const benefits = [
    {
      icon: 'Handshake',
      title: "Commitment to Results",
      description:
        "A 6-month commitment ensures you have enough time to see real results and fully explore the benefits of our platform.",
    },
    {
      icon: 'RotateCcw',
      title: "Improved Results and Analytics",
      description:
        "More time on the platform means we get more data to help you understand what's working, allowing you to adjust your business strategy and see even better results.",
    },
    {
      icon: "Helmet",
      title: "Predictable Costs, Stable Service",
      description:
        "With a 6-month plan, we can continue offering you top-tier support, regular updates, and exclusive features, ensuring you get the most out of your subscription.",
    },
    {
      icon: "ArrowDownToLine",
      title: "Time to Optimize Your Profile",
      description:
        "You'll have ample time to fine-tune your profile and make the most of all the tools available to you—ensuring your business gets the visibility it deserves.",
    },
    {
      icon: "Star",
      title: "Better Long-Term Value",
      description:
        "The longer you stay, the more value you get! A 6-month sign-up ensures you get the full benefit of our platform's features and analytics. Simply put, it's a bang for your bucks!",
    },
  ];