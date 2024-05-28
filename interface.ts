interface Student2 {
    dept: string,
    isFeePaid: boolean
}

interface Teacher2 {
    subject: string,
    isAssigningTest?: boolean
}


interface Teacher2 extends Student {
    university: string
}

const obj3: Teacher2 = {
    dept: 'MCA',
    isFeePaid: true,
    subject: 'Java',
    university: 'Madras university'
}
