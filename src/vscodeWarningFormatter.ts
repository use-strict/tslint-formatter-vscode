import * as Lint from "tslint/lib/lint";

export class Formatter extends Lint.Formatters.AbstractFormatter {
    public format(failures: Lint.RuleFailure[]) {
        let outputLines = failures.map(this.formatFailure);

        return outputLines.join("\n") + "\n";
    }

    private formatFailure(failure: Lint.RuleFailure) {
        let fileName = failure.getFileName();
        let message = failure.getFailure();
        let ruleName = failure.getRuleName();

        let lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
        let positionTuple = (lineAndCharacter.line + 1) + ',' +
            (lineAndCharacter.character + 1);

        return `${fileName} (${positionTuple}): warning TSLINT: ${message} (${ruleName})`;
    }
}
