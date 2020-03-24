//  Generic Interface
// export interface ISmartPhoneService {
//   openApp(name: string): void
//   call(contact: number): void
//   sendSms(msg: string): string
// }

export interface IsmartPhoneService {
  openApp(name: string): void
}

export interface IphoneDevice {
  call(contact: number): void
  sendSms(msg: string): string
}
export class Iphone implements IsmartPhoneService, IphoneDevice {
  openApp (name: string): void {
    console.log(`Opened new app :${name}`)
  }
  call (contact: number): void {
    console.log(`Call my iphone ${contact}`)
  }
  sendSms (msg: string): string {
    console.log(`Send sms using  ${msg}`)
    return msg
  }
}

// Ipad can only only open an app so cannot implements IsmartPhoneService
export class Ipad implements IsmartPhoneService {
  openApp (name: string): void {
    console.log(`Opened new app :${name}`)
  }
}
