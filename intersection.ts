type Student = {
    dept: string,
    isFeePaid: boolean
}
type Teacher = {
    subject: string,
    isAssigningTest: boolean
}

type College = Student & Teacher

let college: College = {
    dept: 'BCA',
    isFeePaid: true,
    subject: 'Database',
    isAssigningTest: false
}