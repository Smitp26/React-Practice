import { CORE_CONCEPTS } from './data';
import Header from '../src/components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data';


function App() {

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

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* <TabButton label='My Component' /> */}
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
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
          
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
