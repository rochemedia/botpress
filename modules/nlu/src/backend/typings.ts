import { IO, NLU } from 'botpress/sdk'

import { NLUApplication } from './application'
import TrainSessionService from './train-session-service'

export interface NLUState {
  engine: NLU.Engine
  trainSessionService: TrainSessionService
  application: NLUApplication
}

export interface NLUProgressEvent {
  type: 'nlu'
  botId: string
  trainSession: NLU.TrainingSession
}

export type EventUnderstanding = Omit<IO.EventUnderstanding, 'includedContexts' | 'detectedLanguage'> & {
  detectedLanguage?: string
}
