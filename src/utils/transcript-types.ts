export interface RootTranscript {
  documentVersion: string;
  mediaLibrary: MediaLibrary;
  highlighters: Highlighter[];
  rootFolder: RootFolder;
  rootCompositionFolder: RootCompositionFolder;
  rootMediaFileFolder: RootMediaFileFolder;
  rootSceneFolder: RootSceneFolder;
  rootMediaFolder: RootMediaFolder;
  projectId: string;
  compositions: Composition[];
  transcripts: Transcript[];
  pinScenes: any[];
  sequenceScenes: any[];
  restorableScenes: any[];
  voices: Voice[];
  isTutorial: boolean;
  settings: Settings;
  validity: Validity;
  model: Model;
  isStoryboard: boolean;
  format: number;
  clientId: string;
  clientName: string;
  clientOS: string;
}

export interface MediaLibrary {
  mediaRefs: MediaRef[];
}

export interface MediaRef {
  id: string;
  assetKey: string;
  displayName: string;
  isBounced: boolean;
  audio: Audio;
  voiceover: Voiceover;
}

export interface Audio {
  duration: number;
  appliedDiarizationWizardResult: boolean;
  diarizationRequested: boolean;
  roomtoneRequested: boolean;
  speechEnhanceEnabled: boolean;
}

export interface Voiceover {
  recognitionFailed: boolean;
  wasImportedForAlignment: boolean;
  wasRecordedInDescript: boolean;
  metadata: Metadata;
  regenerateRecognition: boolean;
}

export interface Metadata {
  voRefMetadataVersion: number;
  alignment: Alignment[];
  assetJson: AssetJson;
}

export interface Alignment {
  word: string;
  startTime: number;
  endTime: number;
  speaker: Speaker;
  attrs: number;
}

export interface Speaker {
  speakerId: string;
}

export interface AssetJson {
  url: string;
}

export interface Highlighter {
  id: string;
  name: string;
  color: number[];
}

export interface RootFolder {
  id: string;
  name: string;
  items: any[];
  type: string;
}

export interface RootCompositionFolder {
  id: string;
  name: string;
  items: Item[];
  type: string;
}

export interface Item {
  id: string;
  type: string;
}

export interface RootMediaFileFolder {
  id: string;
  name: string;
  items: any[];
  type: string;
}

export interface RootSceneFolder {
  id: string;
  name: string;
  items: string[];
}

export interface RootMediaFolder {
  id: string;
  name: string;
  items: any[];
}

export interface Composition {
  name: string;
  gain: number;
  pan: number;
  isMuted: boolean;
  isSoloed: boolean;
  timeline: Timeline;
  effects: any[];
  suppressRoomtone: boolean;
  id: string;
  type: string;
  isVideo: boolean;
}

export interface Timeline {
  id: string;
  superTau: SuperTau;
  noAudioTrack: NoAudioTrack;
  LEGACY_voiceoverMetadataTrack: LegacyVoiceoverMetadataTrack;
  pins: Pins;
  cues: Cues;
  cards: Cards;
}

export interface SuperTau {
  id: string;
  type: string;
  taus: Tau[];
  effects: any[];
  gain: number;
  pan: number;
}

export interface Tau {
  id: string;
  text: Text;
  audioSegment: AudioSegment;
  ignoreAlignment: boolean;
  isBlocked: boolean;
  isScriptClip: boolean;
}

export interface Text {
  string: string;
  attributes: any[];
}

export interface AudioSegment {
  mediaRefId: string;
  offset: number;
  duration: number;
  gain: number;
  suppressAutoMerge: boolean;
  speed: number;
  effects: any[];
}

export interface NoAudioTrack {
  type: string;
  id: string;
  components: Component[];
}

export interface Component {
  type: string;
  id: string;
  offsetFromBaseTime: number;
  offsetFromAnchor: number;
  tauAnchor: TauAnchor;
  sortTiebreaker: number;
  isBlocked: boolean;
  baseType: string;
  shortName: string;
  text: string;
}

export interface TauAnchor {
  tauId: string;
  location: number;
}

export interface LegacyVoiceoverMetadataTrack {
  type: string;
  id: string;
  components: any[];
}

export interface Pins {
  type: string;
  id: string;
  components: any[];
}

export interface Cues {
  type: string;
  id: string;
  components: any[];
}

export interface Cards {
  type: string;
  id: string;
  components: Component2[];
}

export interface Component2 {
  type: string;
  id: string;
  offsetFromBaseTime: number;
  offsetFromAnchor: number;
  tauAnchor: TauAnchor2;
  sortTiebreaker: number;
  isBlocked: boolean;
  baseType: string;
  shortName: string;
  layers: any[];
  effects: any[];
}

export interface TauAnchor2 {
  tauId: string;
  location: number;
}

export interface Transcript {
  name: string;
  gain: number;
  pan: number;
  isMuted: boolean;
  isSoloed: boolean;
  timeline: Timeline2;
  effects: any[];
  suppressRoomtone: boolean;
  id: string;
  type: string;
  transcriptVoiceoverRefId: string;
}

export interface Timeline2 {
  id: string;
  superTau: SuperTau2;
  noAudioTrack: NoAudioTrack2;
  LEGACY_voiceoverMetadataTrack: LegacyVoiceoverMetadataTrack2;
  pins: Pins2;
  cues: Cues2;
  cards: Cards2;
}

export interface SuperTau2 {
  id: string;
  type: string;
  taus: Tau2[];
  effects: any[];
  gain: number;
  pan: number;
}

export interface Tau2 {
  id: string;
  text: Text2;
  audioSegment: AudioSegment2;
  ignoreAlignment: boolean;
  isBlocked: boolean;
  isScriptClip: boolean;
}

export interface Text2 {
  string: string;
  attributes: any[];
}

export interface AudioSegment2 {
  mediaRefId: string;
  offset: number;
  duration: number;
  gain: number;
  suppressAutoMerge: boolean;
  speed: number;
  effects: any[];
}

export interface NoAudioTrack2 {
  type: string;
  id: string;
  components: any[];
}

export interface LegacyVoiceoverMetadataTrack2 {
  type: string;
  id: string;
  components: any[];
}

export interface Pins2 {
  type: string;
  id: string;
  components: any[];
}

export interface Cues2 {
  type: string;
  id: string;
  components: any[];
}

export interface Cards2 {
  type: string;
  id: string;
  components: any[];
}

export interface Voice {
  type: string;
  id: string;
  name: string;
  color: string;
}

export interface Settings {
  automaticallyLevelClips: boolean;
  useRoomtoneOnGapClips: boolean;
  defaultFolders: DefaultFolders;
  wordlessMediaEllipses: boolean;
}

export interface DefaultFolders {
  projectFiles: string;
}

export interface Validity {
  version: number;
  isAlignmentValid: boolean;
}

export interface Model {}
