import React from 'react'
import {
  MainNav,
  Callout,
  Button,
  Breadcrumbs,
  ContentBlock,
  Accordion,
  AccordionGroup,
  DirectionLinks,
  Notification,
  TagList,
  InPageNavLinks,
  LinkList,
  Card,
  Header,
  CardCopy,
  Media,
  Masthead,
  SkipTo
} from 'nsw-ds-react'
import * as Form from 'nsw-ds-react'
import * as Tab from 'nsw-ds-react'
import * as FooterComp from 'nsw-ds-react'
import 'nsw-design-system/dist/css/main.css'
import nextId from 'react-id-generator'
import { Table, TableResponsiveWrapper } from 'nsw-ds-react'

const App = () => {
  return (
    <div className="App nsw-body-content">
      <SkipTo nav='#nav' content='#content' />
      <Masthead />
      <Header department='digital.nsw' headerUrl='#'
              logo='https://www.digital.nsw.gov.au/themes/custom/corporateplus/nsw-digitalnsw-combined.svg' />
      <MainNav navItems={[
        {
          text: 'About DPC',
          url: 'http://google.com'
        },
        {
          text: 'Updates',
          url: '/index.html#updates'
        },
        {
          text: 'Publications',
          url: '/index.html#publications'
        },
        {
          text: 'Tools & Resources',
          url: '/index.html#tools-resources'
        },
        {
          text: 'Contact us',
          url: '/index.html#contact-us'
        }
      ]}
      />
      <div className="nsw-container">
        <h2 className="section-title">Buttons</h2>
        <Button>Primary button</Button>
        <Button as="secondary">Secondary button</Button>
        <Button as="danger">Danger button</Button>

        <h2 className="section-title">In-page notifications</h2>
        <Notification as="info" title="Info alert">
          <p>Content of alert</p>
        </Notification>
        <br />
        <Notification as="error" title="Error alert">
          <p>Content of alert</p>
        </Notification>
        <br />
        <Notification as="warning" title="Warning alert">
          <p>Content of alert</p>
        </Notification>
        <br />
        <Notification as="success" title="Success alert">
          <p>Content of alert</p>
        </Notification>

        <h2 className="section-title">Tags</h2>
        <TagList tags={[
          {
            text: 'foo'
          },
          {
            text: 'bar'
          },
          {
            text: 'baz'
          }
        ]}
        />

        <h2 className="section-title">Callout</h2>
        <Callout title="Title of callout">
          <p>Description of callout</p>
        </Callout>

        <h2 className="section-title">Cards</h2>
        <div className="nsw-grid">
          <div className="nsw-col nsw-col-md-4">
            <Card
              date="2021-03-17"
              tag="Environment"
              link="#"
              headline="Card Title"
              image="https://picsum.photos/id/292/400/200"
              imageAlt="alt text"
            >
              <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div className="nsw-grid">
          <div className="nsw-col nsw-col-md-4">
            <Card
              content
              date="2021-03-17"
              tag="Environment"
              link="#"
              headline="Card Title"
              image="https://picsum.photos/id/292/400/200"
              imageAlt="alt text"
            >
              <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div className="nsw-grid">
          <div className="nsw-col nsw-col-md-4">
            <Card
              content
              link="#"
              headline="Card Title"
            >
              <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div className="nsw-grid">
          <div className="nsw-col nsw-col-md-4">
            <Card
              link="#"
              headline="Card Title"
            >
              <CardCopy>Some text</CardCopy>
            </Card>
          </div>
        </div>
        <div className="nsw-grid nsw-grid--spaced">
          <div className="nsw-col nsw-col-md-6">
            <ContentBlock
              headline="Title"
              copy="this is a paragraph"
              image="https://picsum.photos/id/2/400/200"
              imageAlt="Work desk"
              links={[
                {
                  title: 'link 1',
                  href: '#'
                },
                {
                  title: 'link 2',
                  href: '#'
                },
                {
                  title: 'link 3',
                  href: '#'
                }
              ]}
              viewMore="#"
            />
          </div>
        </div>
        <h2 className="section-title">In-page nav</h2>
        <InPageNavLinks
          title="On this page"
          links={[
            {
              link: 'section1',
              title: 'Section 1'
            },
            {
              link: 'section2',
              title: 'Section 2'
            }
          ]}
        />

        <h2 className="section-title">Breadcrumbs</h2>
        <Breadcrumbs
          label="Breadcrumb for this page"
          items={[
            {
              link: '#',
              text: 'Home'
            },
            {
              link: '#',
              text: 'Parent'
            },
            {
              text: 'Current page'
            }
          ]}
        />

        <h2 className="section-title">Link list</h2>
        <LinkList
          items={[
            {
              link: '#',
              text: 'Home'
            },
            {
              link: '#',
              text: 'Parent'
            }
          ]}
        />
        <h2 className="section-title">Text form groups</h2>
        <Form.FormGroupText
          label="Your name"
          helper="as it is written on your drivers' licence"
          errorText="Please enter your name"
          htmlId={nextId()}
        />
        <Form.FormGroupText
          label="Enter some long text"
          errorText="the error"
          as="textarea"
          htmlId={nextId()}
        />
        <h2 className="section-title">Select form group</h2>
        <Form.FormGroupSelect
          label="Select a thing"
          helper="But only one thing"
          errorText="Please select a thing"
          htmlId={nextId()}
          options={[
            {
              value: '',
              text: 'Please select'
            },
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <Form.FormGroupCheckbox
          label="Select a thing"
          helper="Or more than one thing"
          errorText="Please select at least 1 thing"
          htmlId={nextId()}
          as="group"
          options={[
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <Form.FormGroupCheckbox
          label="Select a thing"
          helper="Or more than one thing"
          errorText="Please select at least 1 thing"
          htmlId={nextId()}
          options={[
            {
              value: '1',
              text: 'Just a lonely checkbox on its own'
            }
          ]}
        />

        <Form.FormGroupRadio
          label="Select a thing"
          helper="Only one thing"
          errorText="Please select 1 thing"
          htmlId={nextId()}
          options={[
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <h2 className="section-title">Error form group</h2>
        <Form.FormGroupText
          label="Your name"
          helper="as it is written on your drivers' licence"
          errorText="Please enter your name"
          htmlId={nextId()}
          status="invalid"
        />
        <Form.FormGroupText
          label="Enter some long text"
          errorText="the error"
          as="textarea"
          htmlId={nextId()}
          status="invalid"
        />
        <Form.FormGroupSelect
          label="Select a thing"
          helper="But only one thing"
          errorText="Please select a thing"
          htmlId={nextId()}
          status="invalid"
          options={[
            {
              value: '',
              text: 'Please select'
            },
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <Form.FormGroupCheckbox
          label="Select a thing"
          helper="Or more than one thing"
          errorText="Please select at least 1 thing"
          htmlId={nextId()}
          status="invalid"
          as="group"
          options={[
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <Form.FormGroupCheckbox
          label="Select a thing"
          helper="Or more than one thing"
          errorText="Please select at least 1 thing"
          htmlId={nextId()}
          status="invalid"
          options={[
            {
              value: '1',
              text: 'Just a lonely checkbox on it\'s own'
            }
          ]}
        />

        <Form.FormGroupRadio
          label="Select a thing"
          helper="Only one thing"
          errorText="Please select 1 thing"
          status="invalid"
          htmlId={nextId()}
          options={[
            {
              value: '1',
              text: 'Option 1'
            },
            {
              value: '2',
              text: 'Option 2',
              selected: 'selected'
            },
            {
              value: '3',
              text: 'Option 3'
            }
          ]}
        />

        <h2 className="section-title">Accordion</h2>
        <AccordionGroup>
          <Accordion
            header="This is an accordion 1"
            body={<p>This is the body of an accordion</p>}
          />
          <Accordion
            header="This is an accordion 2"
            body={<p>This is the body of an accordion</p>}
          />
        </AccordionGroup>
        <h2 className="section-title">Progress indicator</h2>
        <Form.ProgressIndicator step={3} of={5} />

        <h2 className="section-title">Table</h2>
        <TableResponsiveWrapper>
          <Table caption='User record'
                 headers={[
                   { title: 'First Name', key: 'fname', width: 33 },
                   { title: 'Last Name', key: 'lname', width: 33 },
                   { title: 'Email', key: 'email', width: 33 }
                 ]}
                 data={[
                   { fname: 'Coco', lname: 'Clarke', email: 'coco.clarke@email.com' },
                   { fname: 'Bonnie', lname: 'Delacruz', email: 'bonnie.delacruz@email.com' },
                   { fname: 'Matthew', lname: 'Lamb', email: 'matthew.lamb@email.com' }
                 ]} />
        </TableResponsiveWrapper>
        <h2 className="section-title">Link lists</h2>
        <LinkList items={[
          {
            link: 'link/one/',
            text: 'Link 1'
          },
          {
            link: 'link/two/',
            text: 'Link 2',
            className: 'is-active',
            li: {
              className: 'li-wrapping-class'
            }
          },
          {
            text: 'Link 3',
            onClick: () => console.log('You clicked me!')
          }
        ]}
        />
        <h2 className="section-title">Media</h2>
        <Media
          caption="A long caption, ee mei labores adipiscing."
          image="https://picsum.photos/id/237/2000/1250"
          right="50"
          title="A picture of a black dog"
        />
        <p>Nunc vehicula neque nunc, ut placerat turpis luctus a. Aliquam euismod pretium accumsan. Nullam laoreet enim
          vitae elit finibus, in commodo nulla aliquam. Vivamus ac varius dolor. Praesent hendrerit erat nec pulvinar
          congue. </p>
        <p>Mauris in sagittis lacus. Aliquam nec consectetur elit, ac gravida mi. Donec ullamcorper felis volutpat
          venenatis maximus. Quisque facilisis leo at augue pulvinar, ac tincidunt urna egestas.</p>
        <p>Phasellus id sem molestie, facilisis ipsum id, molestie orci. Proin velit erat, luctus et mi eget, maximus
          aliquet dui. Integer nisl ipsum, malesuada ultrices ipsum a, scelerisque elementum risus. Donec erat urna,
          fringilla id ornare id, mattis non urna. Duis faucibus ante ac magna rutrum sagittis.</p>

        <Media
          caption="A long caption, ee mei labores adipiscing."
          center="80"
          title="Digital.nsw launch with Victor Dominello MP at NSW Parliament House"
          video="https://www.youtube.com/embed/HNHu2zRPSB4"
        />
        <h2 className="section-title">Direction Links</h2>
        <DirectionLinks
          links={[
            {
              url: '#',
              direction: 'top',
              text: 'top',
              screenReader: 'of the page'
            },
            {
              url: '#',
              direction: 'bottom',
              text: 'bottom',
              screenReader: 'of the page'
            }
          ]}
        />
        <h2 className="section-title">Tabs</h2>
        <Tab.Tabs>
          <Tab.TabItemWrapper>
            <Tab.TabItem title="Tab 1" urlHash="tab1" />
            <Tab.TabItem title="Tab 2" urlHash="tab2" />
          </Tab.TabItemWrapper>
          <Tab.TabSection urlHash="tab1">This is a tab 1 content</Tab.TabSection>
          <Tab.TabSection urlHash="tab2">This is a tab 2 content</Tab.TabSection>
        </Tab.Tabs>
      </div>
      <FooterComp.Footer>
        <FooterComp.FooterUpper>
          <FooterComp.FooterSectionGroup
            heading={{
              url: '#',
              text: 'Section Link 1'
            }}
            sectionLinks={[
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              }
            ]}
          />
          <FooterComp.FooterSectionGroup
            heading={{
              url: '#',
              text: 'Section Link 1'
            }}
            sectionLinks={[
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              },
              {
                url: '#',
                text: 'Section Link 1'
              }
            ]}
          />
        </FooterComp.FooterUpper>
        <FooterComp.FooterLower>
          <div className="nsw-container">
            <p>
              We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued
              connection to their country and culture.
            </p>
            <hr />
            <FooterComp.FooterLinks
              footerLinks={[
                {
                  url: '#',
                  text: 'Tertiary'
                },
                {
                  url: '#',
                  text: 'Tertiary'
                },
                {
                  url: '#',
                  text: 'Tertiary'
                },
                {
                  url: '#',
                  text: 'Tertiary'
                }
              ]}
            />
            <p>Copyright © 2019</p>
          </div>
        </FooterComp.FooterLower>
      </FooterComp.Footer>
    </div>
  )
}

export default App
