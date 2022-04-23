import styled from 'styled-components'

export const Wrapper = styled.div`
    width:15rem;
    height:450px;
    padding:.5rem;
    overflow-y: auto;
    background-color: white;

    table.data-grid{
      width:100%;
    }

    .data-grid-container .data-grid .cell .value-viewer {
      display: block;
      box-sizing: content-box;
      width: inherit;
    }

    .data-grid-container .data-grid .cell .data-editor{
      display: block;
      box-sizing: content-box;
      height: inherit;
    }
`