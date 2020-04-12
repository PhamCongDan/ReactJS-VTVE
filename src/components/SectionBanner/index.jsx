import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import ListItem from './ListItem'
import Axios from 'axios'
import AxiosServices from '../../services/AxiosServices'
import { useDispatch, useSelector } from 'react-redux'
import Paging from '../Paging'
import { fetchData } from './store/actions'
import Item from './Item'

const SectionBanner = (props) => {
  useEffect(() => {
    // getData()
  }, [])

  async function getData() {
    await AxiosServices.get('https://www.vtvgiaitri.vn/api/v1/menu/primary')
      .then(res => {console.log(res);
      })
  }

  const dispatch = useDispatch()
  const lstData = useSelector((data) => (data.bannerReducer.lstData))
  console.log(lstData);
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <Container maxWidth='lg' style={{background: '#999999'}}>
      <ListItem />
    </Container>
  )
}

export default SectionBanner
