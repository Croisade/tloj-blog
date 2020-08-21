export const sections = [
  { title: 'Home', url: '/' },
  { title: 'Technology', url: '/technology' },
  { title: 'Politics', url: '/politics' },
  { title: 'Health', url: '/health' },
  { title: 'Anime', url: '/anime' },
  { title: 'Schedule', url: '/schedule' },
  { title: 'About Me', url: '/about' },
  { title: 'Privacy', url: '/policy' },
]

export const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
}

export const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
]

export const tlojHeader = {
  image: 'https://thelifeofjamal.com/wp-content/uploads/2019/05/cropped-Logo.jpg?x79259',
  imageText: 'Image Text',
}

export const aboutContent = [
  {
    title: 'Infrastructure',
    description: 'The infrastructure for the thelifeofjamal.com is fault-tolerant, highly-available and spans multiple availability zones by using an application load balancer and auto scaling groups. To ensure security, the EC2 instance resides in a private subnet in a custom VPC. Static objects are stored in S3 and is distributed to clients through CloudFront. Services used: CloudFront, S3, ELB, CloudWatch, EC2, Nat Gateway, Route 53, ACM.',
  },
  {
    title: 'Full Stack',
    description: 'The infrastructure for the thelifeofjamal.com is fault-tolerant, highly-available and spans multiple availability zones by using an application load balancer and auto scaling groups. To ensure security, the EC2 instance resides in a private subnet in a custom VPC. Static objects are stored in S3 and is distributed to clients through CloudFront. Services used: CloudFront, S3, ELB, CloudWatch, EC2, Nat Gateway, Route 53, ACM.',
  },
]

export const techLinks = [
  {
    title: 'Is Docker good?',
    link: '#',
  },
  {
    title: 'Is Ansible good?',
    link: '#',
  },
]


export const homeLinks = [
  {
    title: 'Technology',
    links: techLinks,
  },
  {
    title: 'Politics',
    links: techLinks,
  },
  {
    title: 'Health',
    links: techLinks,
  },
  {
    title: 'Anime',
    links: techLinks,
  },
]
