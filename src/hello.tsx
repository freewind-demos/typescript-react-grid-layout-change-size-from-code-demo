import React, {useState} from 'react';
import GridLayout, {Layout} from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import './index.css';

export default function Hello() {
  const [layout, setLayout] = useState<Layout[]>([
    {i: 'a', x: 0, y: 0, w: 3, h: 3},
    {i: 'b', x: 0, y: 1, w: 1, h: 1},
  ]);

  function changeWidth(n: number) {
    const [a, b] = layout;
    setLayout([{...a, w: a.w + n}, b]);
  }

  function changeHeight(n: number) {
    const [a, b] = layout;
    setLayout([{...a, h: a.h + n}, b]);
  }

  return <div>
    <h1>Hello React-Grid-Layout</h1>
    <GridLayout className='layout' layout={layout}
                cols={8} rowHeight={30} width={1200}>
      <div key='a'>
        A
        <div>
          <div>
            Width:
            <button onClick={() => changeWidth(1)}>+</button>
            <button onClick={() => changeWidth(-1)}>-</button>
          </div>
          <div>
            Height:
            <button onClick={() => changeHeight(1)}>+</button>
            <button onClick={() => changeHeight(-1)}>-</button>
          </div>
        </div>
      </div>
      <div key='b'>B</div>
    </GridLayout>
  </div>;
}
