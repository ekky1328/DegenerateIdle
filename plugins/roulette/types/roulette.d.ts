import { RoulettePlayerBet } from '@prisma/client'

export interface RoulettePlayerBetExt extends RoulettePlayerBet {
    amountAsNumber: number
}