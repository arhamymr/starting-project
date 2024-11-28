import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import HTMLRenderer from 'react-html-renderer';
import MainLayout from 'layouts/main';
import { articlesData } from './content';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const html = `
<h1>Online WYSIWYG Editor and HTML Converter</h1>
<p><strong>Free online What You See Is What You Get (WYSIWYG) editor with instant HTML converter and cleaning features. Compose your documents online in your web browser without downloading and installing any&nbsp;program.</strong></p>
<p>Edit or paste your document in the visual editor on the right to convert it to&nbsp;<a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="nofollow">HTML markup</a>. Edit either of the two input fields to get the result in the other one&nbsp;instantly.</p>
<p><a class="loadDemoText">Load the demo text</a>&nbsp;or populate the workspace with&nbsp;<a class="loremIpsum">Lorem Ipsum</a>&nbsp;gibberish text to experiment with the&nbsp;editor.</p>
<h2>Visual Editor</h2>
<p><img src="https://wysiwyghtml.com/images/wysiwyg-toolbar.jpg" alt="visual toolbar" /><br />Format your text, add&nbsp;<a href="https://htmltable.com/" target="_blank" rel="nofollow">tables</a>, images, links and other sections easily to your document with the toolbar above the visual editor. It works like a regular What You See Is What You Get&nbsp;editor.</p>
<h2>Source Code</h2>
<p><img src="https://wysiwyghtml.com/images/html-toolbar.jpg" alt="source options" /><br />The&nbsp;<a href="https://html-cleaner.com/" target="_blank" rel="nofollow">HTML cleanup</a>&nbsp;options are listed above the source editor. Check the options you need to remove pressing the Clean button or execute them one by one with the right-pointing&nbsp;arrows.</p>
<ol>
<li>Inline styles</li>
<li>Classes &amp; IDs</li>
<li>Empty tags</li>
<li>Tags with 1 space</li>
<li>Successive spaces</li>
<li>Comments</li>
<li>Tag attributes</li>
<li>All tags</li>
</ol>
<p>Below the&nbsp;<a href="https://tohtml.com/" target="_blank" rel="nofollow">syntax highlighted</a>&nbsp;source code you will find other useful features:</p>
<ol>
<li><strong>undo</strong>&nbsp;button to restore a previous saved version of the file</li>
<li><strong>erase</strong>&nbsp;the whole page</li>
<li>organize line&nbsp;<strong>indentation</strong>&nbsp;in the souce to visualize tag hierarchy</li>
<li><strong>compress</strong>&nbsp;the document</li>
<li>enable or disable character&nbsp;<strong>encoding</strong></li>
</ol>
`;
const ArticleList = () => {
  return (
    <MainLayout>
      <Container py={'120px'}>
        <Image
          transform="scale(1.0)"
          src={
            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
          }
          alt="some text"
          objectFit="contain"
          width="100%"
          rounded={'md'}
          mb={12}
          transition="0.3s ease-in-out"
        />
        <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <HTMLRenderer html={html} />
        </VStack>
      </Container>
      {/* ARTICLE DETAIL START HERE */}
    </MainLayout>
  );
};

export default ArticleList;
