import { Flex, Theme } from "theme-ui";
import { funk } from "@theme-ui/presets";


 export const theme = {
  ...funk,
  initialColorModeName: 'light',
  colors: {
    text: '#051625',
    inverseText: '#051625',
    background: '#F2F2F1',
    navColor: 'yellow',
    modes: {
      dark: {
        text: '#BFCCD9',
        inverseText: '#BFCCD9',
        background: '#020E1A',
        navColor: 'brown',
      },
    },
  },
  // figure variant styles
    figure: {
      wrapper: {
        margin: '0 0 0.5rem 0',
        padding: '0',
        height: '100%',
        overflow: 'hidden',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderRadius: '5px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(3, auto)'
      },
      ancor: {
        gridColumn: '1/2',
        gridRow: '1/3',
        marginBottom: '-4px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: '0 -150px',
        justifySelf: 'center'
      },
      figureCaption: {
        gridColumn: '1/2',
        gridRow: '2/3',
        bg: 'rgba(235,235,235, 0.8)',
        fontSize: '1.8rem',
        width: '100%',
        margin: '0',
        padding: '0',
        figureCaptionAncor: {
          display: 'block',
          padding: '1rem',
          textDecoration: 'none',
          color: 'black'
        }
      }
    },
    styles: {
      ...funk.styles,
    },
    modal: {
      modalOverlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalWrapper: {
        width: '85%',
        height: '90vh',
      },
      modalModal: {
         background: 'white',
          width: '100%',
          height: '100%',
          borderRadius: '5px',
          padding: '15px'
      },
      modalHeader: {
        display: 'flex',
        justifyContent: 'flexEnd',
        fontSize: '2rem'
      },
      modalBody: {
        pt: '10px'
      },
      modalButtom: {
        p: '0.7rem',
        bg: 'transparent',
        border: 'dashed',
        borderColor: 'grey'
      }
    }
 }
