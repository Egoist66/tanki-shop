export interface TanksDataApiResponse {
  data: Tank[]
}

export interface Tank {
  id: string
  title: string
  description: string
  image: string
  discount: number
  price: number
  fullDescription: string
  old_price: number
  vehicle_type: string
  premium: boolean
}
