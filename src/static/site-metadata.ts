interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'jujimeizuo · Run',
  siteUrl: 'https://run.jujimeizuo.cn/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'http://www.jujimeizuo.cn/blog',
    },
    {
      name: 'About',
      url: 'http://www.jujimeizuo.cn/',
    },
  ],
};

export default data;
