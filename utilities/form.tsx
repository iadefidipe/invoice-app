import dayjs from 'dayjs'

export function reduceErrors(errors) {
    const messages = []
    for (const key in errors) {
        const value = errors[key]
        if (typeof value === 'string') {
            messages.push(value)
        } else if (typeof value === 'object') {
            messages.push(...reduceErrors(value))
        } else if (Array.isArray(value)) {
            for (const item of value) {
                messages.push(...reduceErrors(item))
            }
        }
    }
    return [...new Set(messages)]
}

export function calcTotal(items:any) {
    let total = 0
    for (const item of items) {
        total += item.total
    }
    return total
}

export function createInvoice( values) {
    return ({
        ...values,
        createdAt: dayjs(values.createdAt).format('YYYY-MM-DD'),
        paymentDue: dayjs(values.createdAt).add(Number(values.paymentTerms), 'day').format('YYYY-MM-DD'),
        total: calcTotal(values.items)
    })
}