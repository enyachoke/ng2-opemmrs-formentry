import { TextInputQuestion } from '../question-models/text-input-question';
import { TextAreaInputQuestion } from '../question-models/text-area-input-question';
import { SelectQuestion } from '../question-models/select-question';
import { UiSelectQuestion } from '../question-models/ui-select-question';
import { DateQuestion } from '../question-models/date-question';
import { MultiSelectQuestion } from '../question-models/multi-select-question';
import { QuestionGroup } from '../question-models/group-question';
import { RepeatingQuestion } from '../question-models/repeating-question';
import { QuestionBase } from '../question-models/question-base';
import { FileUploadQuestion } from '../question-models/file-upload-question';
import { TestOrderQuestion } from '../question-models/test-order-question';
import { ValidationModel } from '../question-models/validation.model';
import { HistoricalHelperService } from '../helpers/historical-expression-helper-service';
import { Form } from './form';
export declare class QuestionFactory {
    dataSources: any;
    historicalHelperService: HistoricalHelperService;
    constructor();
    createQuestionModel(formSchema: any, form?: Form): QuestionBase;
    toSelectQuestion(schemaQuestion: any): SelectQuestion;
    toNumericQuestion(schemaQuestion: any): TextInputQuestion;
    toNumberQuestion(schemaQuestion: any): TextInputQuestion;
    toDateQuestion(schemaQuestion: any): DateQuestion;
    toEncounterDatetimeQuestion(schemaQuestion: any): DateQuestion;
    toMultiCheckboxQuestion(schemaQuestion: any): MultiSelectQuestion;
    toTextAreaQuestion(schemaQuestion: any): TextAreaInputQuestion;
    toTextQuestion(schemaQuestion: any): TextInputQuestion;
    toFileUploadQuestion(schemaQuestion: any): FileUploadQuestion;
    toDrugQuestion(schemaQuestion: any): SelectQuestion;
    toProblemQuestion(schemaQuestion: any): SelectQuestion;
    toConceptAnswerSelect(schemaQuestion: any): SelectQuestion;
    toRepeatingQuestion(schemaQuestion: any): RepeatingQuestion;
    toGroupQuestion(schemaQuestion: any): QuestionGroup;
    toPageQuestion(schemaQuestion: any): QuestionGroup;
    toFormQuestionModel(schemaQuestion: any): QuestionGroup;
    toSectionQuestion(schemaQuestion: any): QuestionGroup;
    toPersonAttributeQuestion(schemaQuestion: any): UiSelectQuestion;
    toEncounterProviderQuestion(schemaQuestion: any): UiSelectQuestion;
    toFieldSetQuestion(schemaQuestion: any): QuestionGroup;
    toEncounterLocationQuestion(schemaQuestion: any): UiSelectQuestion;
    toTestOrderQuestion(schemaQuestion: any): TestOrderQuestion;
    getSchemaQuestions(schema: any): any;
    getQuestions(schema: any, foundArray: any): any;
    getChildrenQuestionModels(schema: any): any;
    toModel(schema: any, renderType: string): any;
    convertOldVersionComplexObsQuestionToNewVersion(schemaQuestion: any): any;
    copyProperties(mappings: any, source: any, destination: QuestionBase): void;
    addValidators(schemaQuestion: any): Array<ValidationModel>;
    addHistoricalExpressions(schemaQuestion: any, question: QuestionBase): any;
    addCalculatorProperty(schemaQuestion: any, question: QuestionBase): any;
    addDisableOrHideProperty(schemaQuestion: any, question: QuestionBase): any;
    private generateId(x);
}
