export const JOURNAL_CREATED = 'JOURNAL_CREATED'
export function createJournal(journal_heading, journal_entry) {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3000/journal`, {
      method: 'POST',
      body: JSON.stringify({ sheet_id: sheet_id, journal_heading: journal_heading, journal_entry: journal_entry }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const createdJournal = await response.json()
    dispatch({
      type: JOURNAL_CREATED,
      sheet_id: sheet_id,
      journal_heading: journal_heading,
      journal_entry: journal_entry
    })
  }
}
