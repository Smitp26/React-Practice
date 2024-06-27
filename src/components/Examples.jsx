import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from 'react';
import Section from "./Section";


export default function Examples(){

  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    //selectedButton => 'components','JSX','props','state'
    setSelectedTopic(selectedButton);
  }

  // Third Approach to render the content conditionally.
  // let tabContent = <p>Please select the content.</p>;
  // if(selectedTopic){
  //   tabContent = (
  //   <div id="tab-content">
  //     <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //     );
  // }

    return(
        <Section title="Examples" id='examples'>
          <menu>
            {/* <TabButton label='My Component' /> */}
            <TabButton isSelected = {selectedTopic === 'components'} 
            onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>

          {/* First Approach to render content conditionally */}
          {!selectedTopic && 'Please select the topic.'}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          }

          {/* Second Approach to render content conditionally */}
          {/* {!selectedTopic ? 'Please select the topic.' : null}
          {selectedTopic ? <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> : null} */}

          {/* Third Approach */}
          {/* {tabContent} */}
        </Section>  
    );
}