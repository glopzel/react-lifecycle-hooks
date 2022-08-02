// ejemplo componente de tipo clase que dispone de los metodos de ciclo de vida 
import React, { Componente } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: va a recibir props por parte del padre')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // true or false
        // sirve para controlar si el componente debe o no actualizarse
    }

    componentWillUpdate() {
        console.log('WillUpdate: justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('DidUpdate: cuando se actualizo, justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: justo antes de desaparecer')
    }

    // return ...
}