export default function Book({ title, description, status }) {
                    return (
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{status}</p>
                      </div>
                    );
                  }