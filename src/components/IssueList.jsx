import React, { memo } from 'react';
import IssueCard from './IssueCard';

const IssueList = memo(({ issues }) => (
  <div>
    {issues.map((issue) => (
      <IssueCard key={issue.id} issue={issue} />
    ))}
  </div>
));

export default IssueList;