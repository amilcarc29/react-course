import React from 'react';

const withClass = (WrappedComponent, className) => {
    // <WrappedComponent {...props}/>
    return (props) => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withClass;

// const withClass = (WrappedComponent, className) => {
//     // <WrappedComponent {...props}/>
//     const WithClass = class extends Component {
        
//         render () {
//             return (
//                 <div className={className}>
//                     <WrappedComponent {...this.props} />
//                 </div>
//             )
//         }
//     }

//    return React.forwardRef((props, ref) => {
//        return <WithClass {...props} forwardedRef={ref} />
//    });
// }

// export default withClass;
