import styled from 'styled-components'
import InvoiceItem from './invoiceItem'
import { motion } from 'framer-motion'
import {useAppSelector} from '../../../redux/types/reduxTypes'

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

const animation = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: .15
        }
    }
}

export default function InvoicesList() {
    const invoices = useAppSelector((state) => state.invoice.value)
    
    return (
        <>
            {invoices && 
                <Wrapper
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                >
                    {invoices.map((invoice) => {
                        return (
                            <InvoiceItem
                                key={invoice.id}
                                id={invoice.id}
                                paymentDue={invoice.paymentDue}
                                clientName={invoice.clientName}
                                total={invoice.total}
                                status={invoice.status}
                            />
                        )
                    })}
                </Wrapper>
            }
        </>
    )
}